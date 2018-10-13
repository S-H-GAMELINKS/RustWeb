extern crate iron;
extern crate router;

use iron::prelude::*;
use iron::status;
use router::Router;

fn main() {
    let mut router = Router::new();
    router.get("/", hello, "helloworld");
    router.get("/about", about, "about");
    router.get("contact", contact, "contact");

    Iron::new(router).http("localhost:3000").unwrap();

    fn hello(_: &mut Request) -> IronResult<Response> {
        Ok(Response::with((status::Ok, "Hello World!")))
    }

    fn about(_: &mut Request) -> IronResult<Response> {
        Ok(Response::with((status::Ok, "About")))
    }

    fn contact(_: &mut Request) -> IronResult<Response> {
        Ok(Response::with((status::Ok, "Contact")))
    }
}