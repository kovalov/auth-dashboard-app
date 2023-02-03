import PocketBase from "pocketbase";

const path = "http://127.0.0.1:8090";
const pb = new PocketBase(path);

const login = async ({ username, password }) => {
  await pb.collection("users").authWithPassword(username, password);
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model.id);
};

export { login, pb };
