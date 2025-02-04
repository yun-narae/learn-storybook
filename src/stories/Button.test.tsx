// Button.test.tsx
import '@testing-library/jest-dom'; // jest-dom 추가
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('버튼이 제대로 렌더링되는지 확인', () => {
  // 버튼 렌더링
  render(<Button label="Button" />);
  
  // 버튼의 텍스트 내용이 "Button"인지 확인
  expect(screen.getByRole('button')).toHaveTextContent('Button');

  // 버튼의 기본 스타일을 확인 (여기선 backgroundColor와 같은 스타일을 확인하는 예시)
  // 예를 들어, 기본적으로 스타일을 지정하지 않으면 배경색이 없거나, default 색이 적용될 수 있음
  expect(screen.getByRole('button')).toHaveStyle('background-color: ButtonFace;');
});

test('primary prop이 true일 때 스타일 확인', () => {
  render(<Button label="Primary Button" primary />);

  // primary가 true일 때, 'storybook-button--primary' 클래스가 적용되는지 확인
  expect(screen.getByRole('button')).toHaveClass('storybook-button--primary');
});

test('backgroundColor prop이 적용되는지 확인', () => {
  render(<Button label="Styled Button" backgroundColor="red" />);

  // backgroundColor가 red로 설정되었는지 확인
  expect(screen.getByRole('button')).toHaveStyle('background-color: red');
});
