import Link from 'next/link'
import React from 'react'

interface Props {
    children: JSX.Element,
    href: string;
}

export const NextLink = ({children, href}: Props) => {
  return (
    <Link href={href} legacyBehavior>
        {children}
    </Link>
  )
}
