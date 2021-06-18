const queryURL = location.search;
const query = new URLSearchParams(queryURL);

export const Preferences = {
  get() {
    const colors = query.get('colors')?.split(',');
    const user = query.get('user');
    const repository = query.get('repository');

    return {
      colors: colors || ['49FF7A', 'F9F9F9'],
      user,
      repository,
    }
  }
}