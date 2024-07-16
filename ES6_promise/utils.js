export function uploadPhoto() {
  return new Promise((resolve, reject) => {
      resolve({ body: 'photo-profile-1' });
  });
}

export function createUser() {
  return new Promise((resolve, reject) => {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' });
  });
}
