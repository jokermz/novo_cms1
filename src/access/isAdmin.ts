import { Access, FieldAccess } from "payload/types";

export const isAdmin: Access = ({ req: { user } }) => {
  // Retorna true ou false com base se o usuário tem cargo de admin
  // return true or false based on if the user has admin role
  if (user && user.role === 'admin') {
    return true;
  }
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  // Retorna true ou false com base se o usuário tem cargo de admin
  // Return true or false based on if the user has admin role
  return Boolean(user?.role?.includes('admin'));
}