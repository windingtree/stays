import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { generate } from 'grommet/themes/base';
import { deepMerge } from 'grommet/utils';
import { useAppState } from './store';

const baseTheme = deepMerge(grommet, generate(16));

export const GlobalStyle: React.FC = ({ children }) => {
  const { themeMode } = useAppState();

  return (
    <Grommet
      full
      style={{ height: 'auto', minHeight: '100vh', width:'100%' }}
      theme={baseTheme}
      themeMode={themeMode}
      background={{ position: 'relative' }}
    >
      {children}
    </Grommet>
  );
};
