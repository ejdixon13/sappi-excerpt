export default function useUrlSearchParams(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}
