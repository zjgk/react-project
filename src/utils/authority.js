// use localStorage to store the authorityRoles info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authorityRoles') || ['admin', 'user'];
  const authorityString =
    typeof str === "undefined" ? localStorage.getItem("authorityRoles") : str;
  // authorityString could be admin, "admin", ["admin"]
  let authorityRoles;
  try {
    authorityRoles = JSON.parse(authorityString);
  } catch (e) {
    authorityRoles = authorityString;
  }
  if (typeof authorityRoles === "string") {
    return [authorityRoles];
  }
  return authorityRoles || ["admin"];
}

export function setAuthority(authorityRoles) {
  const proAuthority = typeof authorityRoles === "string" ? [authorityRoles] : authorityRoles;
  return localStorage.setItem("authorityRoles", JSON.stringify(proAuthority));
}

export function clearAuthority() {
  localStorage.removeItem("authorityRoles");
}
