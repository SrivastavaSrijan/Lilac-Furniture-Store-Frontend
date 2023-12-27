import {
  Login as LoginIcon,
  LogoutOutlined,
  Menu as MenuIcon,
  PermIdentityOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  skeletonClasses,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { every } from 'lodash';
import { useModal } from 'mui-modal-provider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, {
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DeepRequired } from 'react-hook-form';

import { AppConfig, asModal, NavbarConstants, useUser } from '@/lib';
import { GetUserDocument, ICartItem, useSignOutMutation } from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { Auth, IconButtonPopover } from '.';
import { CartPopover } from './CartPopover';
import { Search } from './Search';

interface INavbarProps {}
export const Navbar = (_props: INavbarProps) => {
  const [openDrawer, setDrawer] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { showModal } = useModal();
  const { user, loading, refetch, updating } = useUser();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [signOut] = useSignOutMutation({
    refetchQueries: [
      {
        query: GetUserDocument,
      },
    ],
  });
  const cartRef = useRef<HTMLButtonElement>(null);
  const { dispatch } = useContext(CommonContext);
  const handleDrawerToggle =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawer(open);
    };

  const handleLogin = (ev: MouseEvent) => {
    handleDrawerToggle(false)(ev);
    showModal(
      asModal(<Auth />),
      {
        maxWidth: 'sm',
        PaperProps: { sx: { overflow: 'hidden', height: '100%' } },
      },
      { rootId: 'Auth' },
    );
  };

  const handleLogout = async (ev: MouseEvent) => {
    handleDrawerToggle(false)(ev);
    signOut();
    router.replace(router.asPath);
    enqueueSnackbar({ message: "You've been signed out", variant: 'info' });
  };

  useEffect(() => {
    if (cartRef.current)
      dispatch({ type: 'cart-element', payload: cartRef.current });
  }, [dispatch, cartRef]);

  useEffect(() => {
    dispatch({ type: 'cart-update', payload: refetch });
  }, [dispatch, refetch]);

  useEffect(() => {
    dispatch({ type: 'cart-updating', payload: updating || loading });
  }, [dispatch, loading, updating]);

  useEffect(() => {
    const cleanedCartItems = (user?.cart ?? [])
      .filter(({ variant, quantity, __typename }) => {
        if (
          variant &&
          quantity &&
          every(variant, Boolean) &&
          every(variant?.product, Boolean) &&
          variant?.product?.image?.image?.publicUrlTransformed
        )
          return { variant, quantity, __typename };
        return undefined;
      })
      .filter(Boolean) as DeepRequired<ICartItem>[];

    dispatch({ type: 'cart-items', payload: cleanedCartItems });
  }, [dispatch, user]);

  useEffect(() => {
    setDrawer(false);
  }, [router.asPath]);

  const Logo = (
    <Link href={AppConfig.pages.index.path} passHref>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        gap={2}
      >
        <Typography variant="h5">{AppConfig.name.toUpperCase()}</Typography>
      </Stack>
    </Link>
  );

  const Links = (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      gap={{ xs: 1, md: 2 }}
      alignItems="flex-start"
      color={{ xs: 'inverted.contrastText', md: 'primary.contrastText' }}
    >
      {NavbarConstants.pages.map(({ title, href }) => (
        <Link passHref href={href} key={href}>
          <Button
            color="inherit"
            onClick={handleDrawerToggle(false)}
            sx={{ minWidth: 0 }}
          >
            <Typography sx={{ typography: { xs: 'subtitle2', md: 'body1' } }}>
              {title}
            </Typography>
          </Button>
        </Link>
      ))}
    </Stack>
  );

  const HiUser = (
    <Stack width="100%" justifyContent="center" alignItems="center" gap={1}>
      <Avatar
        src={`https://api.dicebear.com/7.x/micah/svg?seed=${user?.name?.toLowerCase()}&radius=50&backgroundColor=F5F3F6,356B80,8FCBDF&shirtColor=042A3A&hairColor=042A3A&mouth=pucker&baseColor=f9c9b6`}
        alt={user?.name ?? 'User'}
        sx={{ width: { xs: 96, md: 96 }, height: { xs: 96, md: 96 } }}
      />
      <Typography fontWeight={300}>Welcome, {user?.name}!</Typography>
    </Stack>
  );

  const UserAccount = (
    <Stack
      py={{ xs: 1, md: 2 }}
      minWidth={{ xs: 200, md: 200 }}
      gap={{ xs: 1, md: 1.5 }}
    >
      {HiUser}
      <Divider flexItem variant="middle" />
      <List component="nav" disablePadding>
        {/* <Link passHref href="/profile">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlined color="primary" />
            </ListItemIcon>
            <ListItemText primary="Profile" color="common.black" />
          </ListItemButton>
        </Link> */}
        <Link passHref href="/orders">
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagOutlined color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Orders" color="common.black" />
          </ListItemButton>
        </Link>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutOutlined color="primary" />
          </ListItemIcon>
          <ListItemText primary="Logout" color="common.black" />
        </ListItemButton>
      </List>
    </Stack>
  );

  const Cart = (
    <IconButtonPopover
      ref={cartRef}
      Icon={
        <Badge
          badgeContent={updating ? '...' : user?.cart?.length ?? 0}
          color="primary"
        >
          <ShoppingCartOutlined fontSize="inherit" />
        </Badge>
      }
      name="cart"
    >
      <CartPopover />
    </IconButtonPopover>
  );

  const ActionIcons = (
    <Stack
      direction="row"
      gap={{ xs: 1, md: 3 }}
      sx={(theme) => ({
        [`& .${skeletonClasses.root}`]: {
          backgroundColor: alpha(theme.palette.secondary.main, 0.5),
        },
      })}
    >
      <IconButton onClick={() => setShowSearch(!showSearch)} color="secondary">
        <SearchOutlined />
      </IconButton>
      {Cart}
      {(() => {
        if (loading)
          return (
            <Stack
              width={52}
              height={52}
              alignItems="center"
              justifyContent="center"
            >
              <Skeleton variant="circular" height={28} width={28} />
            </Stack>
          );
        if (user)
          return (
            <IconButtonPopover
              Icon={<PermIdentityOutlined fontSize="inherit" />}
              name="user"
            >
              {UserAccount}
            </IconButtonPopover>
          );
        return (
          <IconButton color="secondary" onClick={handleLogin}>
            <LoginIcon fontSize="inherit" />
          </IconButton>
        );
      })()}
    </Stack>
  );

  const DesktopNavbar = (
    <Stack
      display={{ xs: 'none', md: 'flex' }}
      flexDirection="row"
      flexGrow={1}
      alignItems="center"
    >
      {Logo}
      <Box flexGrow={1} />
      {Links}
      <Box flexGrow={1} />
      {ActionIcons}
    </Stack>
  );

  const MobileNavbar = (
    <Stack
      display={{ xs: 'flex', md: 'none' }}
      direction="row"
      width="100%"
      alignItems="center"
    >
      {Logo}
      <Box flexGrow={1} />
      <Stack gap={2} direction="row">
        <IconButton
          onClick={() => setShowSearch(!showSearch)}
          color="secondary"
        >
          <SearchOutlined />
        </IconButton>
        {Cart}
        <IconButton
          color="secondary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle(true)}
        >
          <MenuIcon color="inherit" fontSize="inherit" />
        </IconButton>
      </Stack>
      <SwipeableDrawer
        anchor="right"
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle(false)}
        onOpen={handleDrawerToggle(true)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
        }}
      >
        <Stack py="15%" px={1} gap={{ xs: 2, md: 3 }}>
          <Stack gap={{ xs: 2, md: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              gap={{ xs: 1, md: 3 }}
              alignItems="flex-start"
            >
              {user && (
                <>
                  {HiUser}
                  <Link passHref href="/profile">
                    <Button sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{ typography: { xs: 'subtitle2', md: 'body1' } }}
                      >
                        Profile
                      </Typography>
                    </Button>
                  </Link>
                  <Link passHref href="/orders">
                    <Button sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{ typography: { xs: 'subtitle2', md: 'body1' } }}
                      >
                        Orders
                      </Typography>
                    </Button>
                  </Link>
                  <Button onClick={handleLogout} sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{ typography: { xs: 'subtitle2', md: 'body1' } }}
                    >
                      Logout
                    </Typography>
                  </Button>
                  <Divider flexItem />
                </>
              )}
            </Stack>
          </Stack>
          {Links}
          {!user && (
            <Button onClick={handleLogin} variant="contained">
              <Typography sx={{ typography: { xs: 'subtitle2', md: 'body1' } }}>
                Login
              </Typography>
            </Button>
          )}
        </Stack>
      </SwipeableDrawer>
    </Stack>
  );

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: { xs: 0, md: 0 },
      }}
      elevation={0}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          {MobileNavbar}
          {DesktopNavbar}
        </Toolbar>
      </Container>
      <AnimatePresence mode="wait">
        {showSearch && (
          <motion.div
            initial={{ scale: 0.99, opacity: 0, height: 0 }}
            exit={{ scale: 0.99, opacity: 0, height: 0 }}
            animate={{ scale: 1, opacity: 1, height: 'initial' }}
            transition={{
              scale: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              height: { type: 'spring', duration: 0.2 },
            }}
          >
            <Container maxWidth="lg">
              <Stack width="100%" alignItems="flex-end" pb={1}>
                <Stack
                  width={{ xs: '100%', md: 'initial' }}
                  maxWidth={(theme) => ({
                    xs: '100%',
                    md: theme.breakpoints.values.sm,
                  })}
                >
                  <Search />
                </Stack>
              </Stack>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </AppBar>
  );
};
