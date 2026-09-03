import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  className = '',
  target,
  rel,
  ...restProps
}) => {
  const classes = `${styles.button} ${styles[`button--${variant}`]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={classes} 
          target={target} 
          rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
          {...restProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={rel} {...restProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
