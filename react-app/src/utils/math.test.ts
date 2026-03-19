import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('should add a positive and negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  it('should add zero to a number', () => {
    expect(add(5, 0)).toBe(5);
  });

  it('should add two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  it('should add decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});
