import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Nav />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
