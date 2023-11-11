import {
  AccountCircleOutlined,
  Login as LoginIcon,
  LogoutOutlined,
  Menu as MenuIcon,
  PermIdentityOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { useModal } from 'mui-modal-provider';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { KeyboardEvent, MouseEvent, useState } from 'react';

import {
  AppConfig,
  asModal,
  AssetsConfig,
  NavbarConstants,
  useUser,
} from '@/lib';
import { GetUserDocument, useSignOutMutation } from '@/lib/graphql';

import { Auth, IconButtonPopover } from '.';
import { ElevationScroll } from './ElevationScroll';

interface INavbarProps {}
export const Navbar = (_props: INavbarProps) => {
  const [openDrawer, setDrawer] = useState(false);
  const { showModal } = useModal();
  const user = useUser();
  const router = useRouter();
  const [signOut] = useSignOutMutation({ refetchQueries: [GetUserDocument] });

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
  };

  const Logo = (
    <Stack justifyContent="center" alignItems="center" direction="row" gap={2}>
      <Image
        src={AssetsConfig.brand.logo}
        width={48}
        height={48}
        style={{ objectFit: 'contain', borderRadius: '50%' }}
        alt="Logo"
      />
      <Typography variant="h5" color="primary.main">
        {AppConfig.name.toUpperCase()}
      </Typography>
    </Stack>
  );

  const Links = (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      gap={{ xs: 1, md: 3 }}
      alignItems="flex-start"
    >
      {NavbarConstants.pages.map((page) => (
        <Link passHref href={page} key={nanoid()}>
          <Button onClick={handleDrawerToggle(false)} sx={{ minWidth: 0 }}>
            <Typography sx={{ typography: { xs: 'subtitle2', md: 'body1' } }}>
              {page}
            </Typography>
          </Button>
        </Link>
      ))}
    </Stack>
  );

  const UserAccount = (
    <Stack
      py={{ xs: 1, md: 2 }}
      minWidth={{ xs: 200, md: 200 }}
      gap={{ xs: 1, md: 1.5 }}
    >
      <Stack
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap={{ xs: 1, md: 1.25 }}
      >
        <Avatar src="/lol.jpg" alt="SM" style={{ width: 64, height: 64 }} />
        <Typography>Welcome, {user?.name}</Typography>
      </Stack>
      <Divider flexItem variant="middle" />
      <List component="nav" disablePadding>
        <Link passHref href="/profile">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlined color="primary" />
            </ListItemIcon>
            <ListItemText primary="Profile" color="common.black" />
          </ListItemButton>
        </Link>
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

  const ActionIcons = (
    <Stack direction="row" gap={{ xs: 1, md: 3 }}>
      <IconButton color="primary" size="large">
        <SearchOutlined fontSize="inherit" />
      </IconButton>
      <IconButtonPopover Icon={<ShoppingCartOutlined />} name="cart">
        <Typography sx={{ p: 2 }}>
          The content of the Popover for cart.
        </Typography>
      </IconButtonPopover>
      {user ? (
        <IconButtonPopover Icon={<PermIdentityOutlined />} name="user">
          {UserAccount}
        </IconButtonPopover>
      ) : (
        <IconButton color="primary" onClick={handleLogin} size="large">
          <LoginIcon fontSize="inherit" />
        </IconButton>
      )}
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
    <Stack display={{ xs: 'flex', md: 'none' }} direction="row" width="100%">
      {Logo}
      <Box flexGrow={1} />
      <Stack gap={2} direction="row">
        <IconButtonPopover Icon={<ShoppingCartOutlined />} name="cart">
          <Typography sx={{ p: 2 }}>
            The content of the Popover for cart.
          </Typography>
        </IconButtonPopover>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle(true)}
        >
          <MenuIcon color="inherit" />
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
        <Stack py="25%" px={1} gap={{ xs: 2, md: 3 }}>
          <Stack gap={{ xs: 2, md: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              gap={{ xs: 1, md: 3 }}
              alignItems="flex-start"
            >
              {user && (
                <>
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
    <ElevationScroll>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ bgcolor: 'background.paper', py: { xs: 1, md: 1 } }}
        elevation={0}
      >
        <Container maxWidth="md" disableGutters>
          <Toolbar>
            {MobileNavbar}
            {DesktopNavbar}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};
