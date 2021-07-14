import { some } from 'lodash';
import { useMemo } from 'react';
import Authority, { AuthorityRole } from '../types/Authority.interface';
// import useUser from './useUser';

const AUTHORITIES = [
  { authority: AuthorityRole.ROLE_NA },
  { authority: AuthorityRole.ROLE_COMPLAINT_CREATE },
];
const useRole = (): {
  roles: Authority[] | undefined;
  hasRole: (role: AuthorityRole) => boolean;
  isNonReleaseNaUser: boolean;
  isNonReleaseEuUser: boolean;
  isReleaseEuUser: boolean;
  isReleaseUser: boolean;
  isInternalUser: boolean;
  isFetching: boolean;
} => {
  // const { data: user, isFetching } = useUser();
  const hasRole = (role: AuthorityRole) =>some(AUTHORITIES, { authority: role });
  const isNonReleaseNaUser =
    hasRole(AuthorityRole.ROLE_NA) && !hasRole(AuthorityRole.ROLE_RELEASE);
  const isNonReleaseEuUser =
    hasRole(AuthorityRole.ROLE_EU) && !hasRole(AuthorityRole.ROLE_RELEASE);
  const isReleaseEuUser =
    hasRole(AuthorityRole.ROLE_EU) && hasRole(AuthorityRole.ROLE_RELEASE);
  const isReleaseUser = hasRole(AuthorityRole.ROLE_RELEASE);
  const isInternalUser = hasRole(AuthorityRole.ROLE_INTERNAL);
  return {
    roles: user?.authorities,
    hasRole,
    isNonReleaseNaUser,
    isNonReleaseEuUser,
    isReleaseEuUser,
    isReleaseUser,
    isInternalUser,
    isFetching,
  };
};

export default useRole;
