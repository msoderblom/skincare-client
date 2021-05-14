import { useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import AuthPage from "./pages/AuthPage";
import SkinfluencersPage from "./pages/SkinfluencersPage";
import CreateThreadPage from "./pages/forum/CreateThreadPage";
import ForumFeedPage from "./pages/forum/ForumFeedPage";
import ThreadDetailPage from "./pages/forum/ThreadDetailPage";
import PostDetailPage from "./pages/blog/PostDetailPage";
import Header from "./components/Header";
import BlogFeedPage from "./pages/blog/BlogFeedPage";
import BurgerMenu from "./components/BurgerMenu";
import { useOnClickOutside } from "./hooks";
import { useDispatch } from "react-redux";
import { appActions } from "./redux/app";
import KBeautyPage from "./pages/KBeautyPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  const node = useRef();
  useOnClickOutside(
    node,
    () => dispatch(appActions.setMenuIsOpen(false)),
    "burgerBtn"
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div id="outer-container" style={{ height: "100%" }}>
        <Header />
        <div ref={node}>
          <BurgerMenu />
        </div>
        <main id="page-wrap" style={{ paddingTop: 100, height: "100%" }}>
          <Switch>
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/skinfluencers" component={SkinfluencersPage} />
            <Route exact path="/k-beauty" component={KBeautyPage} />
            <Route exact path="/k-beauty/:brandslug" component={KBeautyPage} />
            <Route exact path="/blog" component={BlogFeedPage} />
            <Route exact path="/blog/post/:id" component={PostDetailPage} />
            <Route exact path="/forum" component={ForumFeedPage} />
            <Route
              exact
              path="/forum/thread/:id"
              component={ThreadDetailPage}
            />
            <ProtectedRoute
              exact
              path="/forum/create-thread"
              component={CreateThreadPage}
            />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

// TODO: Create protected (check login) route for /forum/create-thread
