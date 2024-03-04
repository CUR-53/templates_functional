'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { FaBars } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const menuData = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Services',
    path: '/services',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Navigation = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.bar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={`/${logo}`} alt={'SmukNu'} width={4989} height={1349} className={styles.image}></Image>
          </Link>
        </div>

        <div className={styles.actions}>
          {/* Menu */}
          <div onClick={() => setIsOpenCart(!isOpenCart)}>
            <FaCartShopping className={`${styles.bars}`}></FaCartShopping>
          </div>
          {/* Basket */}
          <div onClick={() => setIsOpen(!isOpen)}>
            <FaBars className={`${styles.bars}`}></FaBars>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)}>
        {menuData.map((menuItem) => {
          return (
            <Link key={menuItem.title} href={menuItem.path}>
              {menuItem.title}
            </Link>
          );
        })}
      </div>

      {/* Cart */}
      <div className={`${styles.cart} ${isOpenCart ? styles.openCart : ''}`} onClick={() => setIsOpenCart(false)}>
        <div className={styles.empty}>Din kurv er tom</div>
      </div>
    </div>
  );
};

export default Navigation;
