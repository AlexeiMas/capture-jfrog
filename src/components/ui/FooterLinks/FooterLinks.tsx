import React from 'react';
import * as S from './FooterLinks.styles';

interface IFooterLinks {
  href: string;
  label: string;
  isActive?: boolean;
  borderRight?: boolean;
}

export interface IFooterLinksProps {
  links: IFooterLinks[];
  align?: string;
}

const FooterLinks: React.FC<IFooterLinksProps> = ({ links, align }: IFooterLinksProps) => {

  const getLinkItem = (link: IFooterLinks) => {
    const { href, label, borderRight } = link;
    return (
      <div key={label} style={{
        padding: 0,
        margin: 0,
        display: 'flex'
      }}>
        <S.LinkItem>
          <a href={href} target="_blank" rel="noreferrer">{label}</a>
        </S.LinkItem>
        {borderRight ? <S.LinksBorder /> : ''}
      </div>
    )
  }

  return (
    <S.LinksContainer style={{ justifyContent: align ? align : "center" }}>
      {
        links.map((link) => {
          return getLinkItem(link);
        })
      }
    </S.LinksContainer >
  );
};

export default FooterLinks;
