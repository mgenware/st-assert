import { eq, notEq, deepEq, notDeepEq, ok } from '../dist/main.js';

it('eq', () => {
  eq(1, 1);
});

it('notEq', () => {
  notEq(0, 1);
});

it('deepEq', () => {
  deepEq([1], [1]);
});

it('notDeepEq', () => {
  notDeepEq([1], [0]);
});

it('ok', () => {
  ok(1);
});
