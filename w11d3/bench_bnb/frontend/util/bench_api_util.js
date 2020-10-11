export const fetchBenches = (filters) => {
  return $.ajax({
    method: "get",
    url: "/api/benches",
    data: {
      bounds: filters
    },
    error: (err) => console.log(err)
  });
}