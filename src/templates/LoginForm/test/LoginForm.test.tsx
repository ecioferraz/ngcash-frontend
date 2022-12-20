import renderTheme from '../../../styles/renderTheme';
import LoginForm from '..';

describe('<LoginForm />', () => {
  it('should render <LoginForm />', () => {
    const { container } = renderTheme(<LoginForm />);

    expect(container).toMatchSnapshot();
  });
});
