import React from 'react';
import * as S from './Loader.styles';

interface ILoader {
  load?: boolean;
  variant?: string;
  size?: string;
  className?: string;
}

const Loader: React.FC<ILoader> = ({ load, variant, size, className }: ILoader) => {
  if (typeof load === 'boolean' && !load) return null;
  if (variant === 'dark') return <S.LoaderDark size={size} className={className}/>;

  return <S.LoaderLight size={size} className={className}/>;
};

export default Loader;
