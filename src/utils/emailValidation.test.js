import { isValidEmail } from '@/utils/emailValidation';

describe('isValidEmail', () => {
  it.each([
    'jane@gmail.com',
    'jane.doe+tag@company.co.uk',
    'kashyapabhi688@gmail.com',
    'UPPER@GMail.COM',
    '  spaced@gmail.com  ',
  ])('accepts valid email: %s', (email) => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    'a@example.com',
    'a@example.org',
    'a@test.com',
    'a@test.dev',
    'a@foo.test',
    'a@anything.invalid',
    'a@localhost',
    'a@x.mailinator.com',
    'a@yopmail.com',
    'a@10minutemail.com',
    'a@guerrillamail.com',
    'a@trashmail.com',
  ])('rejects fake/disposable domain: %s', (email) => {
    expect(isValidEmail(email)).toBe(false);
  });

  it.each([
    'not-an-email',
    'missing@tld',
    'double@@gmail.com',
    'spaces in@gmail.com',
    '',
    undefined,
    null,
    123,
  ])('rejects malformed input: %s', (email) => {
    expect(isValidEmail(email)).toBe(false);
  });

  it('does not false-positive on lookalikes', () => {
    expect(isValidEmail('a@contest.com')).toBe(true);
    expect(isValidEmail('a@testimonial.io')).toBe(true);
    expect(isValidEmail('a@examplestech.com')).toBe(true);
  });
});
