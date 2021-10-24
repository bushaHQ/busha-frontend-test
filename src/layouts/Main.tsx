import { ReactNode, useEffect, useState } from "react";
import {
  Avatar,
  Col,
  Container,
  List,
  ListItem,
  Nav,
  Row,
  Text,
} from "../components/bits";
import { srid } from "../lib";

export interface Route {
  link: string;
  name: string;
  render: () => ReactNode;
}

export interface MainLayoutProps {
  routes: Route[];
}

function hydrate() {
  /**
   * This modification modifies the history object to add some functionality.
   *
   * By default, before these modifications, there's a popstate event,
   * but there are no events for pushstate, and replacestate.
   *
   * This modifies these three functions so that all fire a custom locationchange event for you to use,
   * and also pushstate and replacestate events if you want to use those.
   */

  window.history.pushState = ((f) =>
    function pushState(this: typeof pushState, ...args: any) {
      const ret = f.apply(this, args);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(window.history.pushState);

  window.history.replaceState = ((f) =>
    function replaceState(this: typeof replaceState, ...args: any) {
      const ret = f.apply(this, args);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(window.history.replaceState);

  window.addEventListener("popstate", () => {
    window.dispatchEvent(new Event("locationchange"));
  });

  // return a dehydration function to clear event listners
  return function () {
    window.removeEventListener("popstate", () => null);
  };
}

export const MainLayout = (props: MainLayoutProps) => {
  const { routes } = props;
  const [currentRoute, setRoute] = useState<Route>();

  useEffect(() => {
    const dehydate = hydrate();

    window.addEventListener("locationchange", function () {
      const i = routes.findIndex(
        (route) => route.link === window.location.pathname
      );
      if (i >= 0) setRoute(routes[i]); // TODO: handle 404
    });

    if (routes.length >= 1) handleClick(routes[0]);

    return () => {
      dehydate();
      window.removeEventListener("locationchange", () => null);
    };
  }, []);

  const handleClick = (route: Route) => {
    window.history.pushState({}, route.name, route.link);
  };

  return (
    <>
      <Nav>
        <Container fillHeight>
          <Row align="center">
            <Col cols>
              <img src="/logo.svg" alt="Busha" />
            </Col>
            <Col cols shrink style={{ padding: 0 }}>
              <Row noGutters style={{ margin: 0 }}>
                <Col cols shrink style={{ paddingTop: 0, paddingBottom: 0 }}>
                  <Avatar>
                    <Text mode="span">O</Text>
                  </Avatar>
                </Col>
                <Col xs={8}>
                  <Text mode="span" size={1} truncate>
                    Oluwatobi Akindunjoye
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Nav>
      <main>
        <Container>
          <Row>
            <Col xs={12} sm={4} lg={3} style={{ marginTop: 0 }}>
              <List>
                {routes.map((route) => {
                  const id = srid();

                  return (
                    <ListItem
                      key={id}
                      as="a"
                      href={route.link}
                      active={currentRoute?.link === route.link}
                      link
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleClick(route);
                      }}
                    >
                      <Text mode="span">{route.name}</Text>
                    </ListItem>
                  );
                })}
              </List>
            </Col>
            <Col xs={12} sm={8} lg={9}>
              {currentRoute?.render()}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
