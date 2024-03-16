import express from "express";
import users from "../../controllers/users-controller";

var router = express.Router();

interface EndpointDefinition {
    endpoint: RegExp;
    method: Function;
    handler: Function;
}

const GET = router.get.bind(router);
const POST = router.post.bind(router);
const PUT = router.put.bind(router);
const DELETE = router.delete.bind(router);

/* Endpoint definitions */
const endpoints: EndpointDefinition[] = [
    {
        endpoint: /\/users/,
        method: GET,
        handler: users.getUsers,
    },
];

/* Register endpoints */
endpoints.forEach((endpoint: EndpointDefinition) => {
    endpoint.method(endpoint.endpoint, endpoint.handler);
});

export default router;
