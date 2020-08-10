import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { matchPath } from 'react-router';
import {
  Menu,
} from 'semantic-ui-react';

import { routes } from '../../routes';
import UserMenu from '../navigation/UserMenu';
import logo from '../../logo.svg';
import { pushPropType } from '../common';

const pathToactiveItem = (path) => routes.find((route) => matchPath(path, {
  path: route.path,
  component: route.component,
  exact: !!route.exact,
  strict: !!route.strict,
})).item;

function Navbar({
  pushAction,
  pathname,
}) {
  const handleItemClick = (e, { to }) => {
    pushAction(to);
  };

  const activeItem = pathToactiveItem(pathname);

  return (
    <Menu
      size="large"
      color="teal"
      stackable
    >
      <Menu.Item>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Menu.Item
        to="/"
        onClick={handleItemClick}
        active={activeItem === 'home'}
      >
        Home
      </Menu.Item>
      <Menu.Item
        to="/add"
        onClick={handleItemClick}
        active={activeItem === 'newquestion'}
      >
        New Question
      </Menu.Item>
      <Menu.Item
        to="/leaderboard"
        onClick={handleItemClick}
        active={activeItem === 'leaderboard'}
      >
        Leader Board
      </Menu.Item>
      <Menu.Menu
        position="right"
      >
        <Menu.Item
          to="/about"
          onClick={handleItemClick}
          active={activeItem === 'about'}
        >
          About
        </Menu.Item>
        <UserMenu
          active={activeItem === 'signin'}
        />
        {/*
           /* <Menu.Item>
           /*   {(login && (
           /*     <Fragment>
           /*       {`Hello, ${users[login].name}`}
           /*       <Image
           /*         src={users[login].avatarURL}
           /*         alt="User avatar"
           /*         spaced
           /*         avatar
           /*         bordered
           /*       />
           /*     </Fragment>
           /*   ))
           /*    || 'Welcome, please sign-in'}
           /* </Menu.Item>
           /* <Menu.Item
           /*   onClick={(login && handleLogout) || handleLogin}
           /* >
           /*   <Button
           /*     basic
           /*     animated
           /*     disabled={activeItem === 'signin'}
           /*   >
           /*     <Button.Content
           /*       hidden
           /*     >
           /*       {(login && 'Sign-out') || 'Sign-in'}
           /*     </Button.Content>
           /*     <Button.Content
           /*       visible
           /*     >
           /*       <Icon
           /*         name={(login && 'sign-out') || 'sign-in'}
           /*         color="teal"
           /*         link
           /*         inverted
           /*         circular
           /*       />
           /*     </Button.Content>
           /*   </Button>
           /* </Menu.Item>
         */}
      </Menu.Menu>
    </Menu>
  );
}
// class Navbar extends Component {
//   constructor(...args) {
//     super(...args);
//     this.state = {
//       activeItem: 'home',
//     };
//   }

//   handleItemClick = (e, { name, to }) => {
//     const {
//       props,
//     } = this;

//     props.pushAction(to);
//     this.setState({ activeItem: name });
//   }

//   render() {
//     const {
//       handleItemClick,
//       state: {
//         activeItem,
//       },
//     } = this;

//     const {
//       props: {
//         router,
//       },
//     } = this;

//     return (
//       <Menu
//         size="large"
//         color="teal"
//         stackable
//       >
//         <Menu.Item>
//           <img src={logo} alt="Logo" />
//         </Menu.Item>
//         <Menu.Item
//           name="home"
//           to="/"
//           onClick={handleItemClick}
//           active={activeItem === 'home'}
//         >
//           Home
//         </Menu.Item>
//         <Menu.Item
//           name="add"
//           to="/add"
//           onClick={handleItemClick}
//           active={activeItem === 'add'}
//         >
//           New Question
//         </Menu.Item>
//         <Menu.Item
//           name="leaderboard"
//           to="/leaderboard"
//           onClick={handleItemClick}
//           active={activeItem === 'leaderboard'}
//         >
//           Leader Board
//         </Menu.Item>
//         <Menu.Menu
//           position="right"
//         >
//           <Menu.Item
//             name="about"
//             to="/about"
//             onClick={handleItemClick}
//             active={activeItem === 'about'}
//           >
//             About
//           </Menu.Item>
//           <UserMenu
//             active={activeItem === 'signin'}
//           />
//           {/*
//            /* <Menu.Item>
//            /*   {(login && (
//            /*     <Fragment>
//            /*       {`Hello, ${users[login].name}`}
//            /*       <Image
//            /*         src={users[login].avatarURL}
//            /*         alt="User avatar"
//            /*         spaced
//            /*         avatar
//            /*         bordered
//            /*       />
//            /*     </Fragment>
//            /*   ))
//            /*    || 'Welcome, please sign-in'}
//            /* </Menu.Item>
//            /* <Menu.Item
//            /*   onClick={(login && handleLogout) || handleLogin}
//            /* >
//            /*   <Button
//            /*     basic
//            /*     animated
//            /*     disabled={activeItem === 'signin'}
//            /*   >
//            /*     <Button.Content
//            /*       hidden
//            /*     >
//            /*       {(login && 'Sign-out') || 'Sign-in'}
//            /*     </Button.Content>
//            /*     <Button.Content
//            /*       visible
//            /*     >
//            /*       <Icon
//            /*         name={(login && 'sign-out') || 'sign-in'}
//            /*         color="teal"
//            /*         link
//            /*         inverted
//            /*         circular
//            /*       />
//            /*     </Button.Content>
//            /*   </Button>
//            /* </Menu.Item>
//             */}
//         </Menu.Menu>
//       </Menu>
//     );
//   }
// }

Navbar.propTypes = {
  pushAction: pushPropType,
  pathname: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  pushAction: push,
};

function mapStateToProps({ authedUser, users, router }) {
  return {
    login: authedUser,
    users,
    pathname: router.location.pathname,
  };
}

export default connect(mapStateToProps, {
  pushAction: push,
})(Navbar);
