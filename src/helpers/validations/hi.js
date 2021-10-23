export default {
  hi: {
    valid: true,
    className: 'is-invalid',
    validate: (title) => /[\d\w ]+/.test(title)
  }
};
