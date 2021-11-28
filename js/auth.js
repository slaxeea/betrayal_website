function init() {
  supabase = supabase.createClient(
    "https://rzsrjvhfytcbeepyssgf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODAzMTM3MSwiZXhwIjoxOTUzNjA3MzcxfQ._lbG5Svb4bQbrsArAMRPq2mG3ERItCiiEZdaNsKFh8g"
  );
  return supabase;
}

function loginWithEmailAndPassword(mail, password) {
  let { user, error } = supabase.auth
    .signIn({
      email: mail,
      password: password,
    })
    .then(
      (user) => {
        return user;
      },
      (error) => {
        return error;
      }
    );
}

function createUserWithMailAndPassword(mail, password) {
  let { user, error } = supabase.auth
    .signUp({
      email: mail,
      password: password,
    })
    .then(
      (user) => {
        return user;
      },
      (error) => {
        return error;
      }
    );
}

function logout() {
  supabase.auth.signOut();
}

function getCurrentUser() {
  return supabase.auth.currentUser
}

