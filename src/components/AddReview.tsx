import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  Stack,
} from '@mui/material';
import { useModal } from 'mui-modal-provider';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object } from 'yup';

import { MessagesMap, stringRequired } from '@/lib';
import { useCreateReviewMutation } from '@/lib/graphql';

import { Text } from './Text';

interface IAddReviewForm {
  author: string;
  content: string;
}
const AddReviewSchema = object({
  author: stringRequired(),
  content: stringRequired(),
});
interface IAddReviewProps {
  slug: string;
  refetch: Function;
}
export const AddReview = ({ slug, refetch }: IAddReviewProps) => {
  const [rating, setRating] = useState<number | null>(2);
  const { enqueueSnackbar } = useSnackbar();

  const { destroyModal, state } = useModal();
  const [handleCreateReview, { data, loading, error }] =
    useCreateReviewMutation({
      // refetchQueries: [
      //   {
      //     query: ProductReviewsBySlugDocument,
      //     variables: {
      //       where: { slug },
      //       orderBy: { createdAt: OrderDirection.Desc },
      //     },
      //   },
      // ],
    });
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IAddReviewForm>({
    values: { author: '', content: '' },
    resolver: yupResolver(AddReviewSchema),
  });
  const onSubmit: SubmitHandler<IAddReviewForm> = async (formValues) => {
    if (!formValues) return;
    await handleCreateReview({
      variables: {
        data: {
          ...formValues,
          rating,
          product: { connect: { slug } },
          createdAt: new Date(),
        },
      },
    });
  };

  const handleCancel = useCallback(
    () => destroyModal(Object.keys(state)?.[0]),
    [destroyModal, state],
  );

  useEffect(() => {
    if (error?.message) {
      setError('root', { message: MessagesMap.error });
      enqueueSnackbar(MessagesMap.review.failure, { variant: 'error' });
    }
  }, [enqueueSnackbar, error, setError]);

  useEffect(() => {
    if (data?.createReview?.id) {
      enqueueSnackbar(MessagesMap.review.success, { variant: 'success' });
      handleCancel();
      refetch();
    }
  }, [data, enqueueSnackbar, handleCancel, refetch]);

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="contents"
      >
        <DialogTitle>Add Review</DialogTitle>
        <DialogContent>
          <Stack gap={3} minWidth={{ xs: 'initial', md: 343 }}>
            <Rating
              name="rating"
              value={rating}
              onChange={(_, newValue) => {
                setRating(newValue);
              }}
              sx={{ width: 'fit-content' }}
            />
            <Text<IAddReviewForm>
              variant="filled"
              label="Name"
              name="author"
              autoComplete="given-name"
              control={control}
              errors={errors}
            />

            <Text<IAddReviewForm>
              variant="filled"
              label="Review"
              placeholder="What did you like/dislike about this product?"
              name="content"
              multiline
              maxRows={4}
              minRows={2}
              control={control}
              errors={errors}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" disabled={loading}>
            Post Review
          </Button>
          <Button
            type="submit"
            variant="outlined"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </Button>
        </DialogActions>
      </Stack>
    </>
  );
};
