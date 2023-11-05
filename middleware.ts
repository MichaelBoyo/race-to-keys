import { withAuth } from "next-auth/middleware";

const protetedRoutes = ["", ""];

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (protetedRoutes.includes(req.url) && token === null) {
        return false;
      }
      return true;
    },
  },
});
