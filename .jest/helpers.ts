import { act } from '@testing-library/react';

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

/*
  Added after got this error: "When testing, code that causes React state updates should be wrapped into act(...):"
  This is happening because a jest timing problem when using the `useEffect` hook inside a tested component.

  Use this in your test after mounting to ensure you won't get an update problem.
  Reference: https://github.com/airbnb/enzyme/issues/2073#issuecomment-531488981
*/
export const actWait = async (amount = 0) => {
  await act(async () => {
    await wait(amount);
  });
};
