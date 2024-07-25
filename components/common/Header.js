import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowRightAlt } from "react-icons/md";




const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo
                img="/images/logo.png"
                width={80}
                height={50}
                caption="7"
                className="logomin"
              />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              Agency
            </Link>
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Digital Marketing
            </Link>
            <Link
              href="/services"
              className={`more ${activeLink == "/services" ? "activeLink" : "none"}`}
            >
              Services <MdOutlineKeyboardArrowDown />
              <div className="list">
                <Link className="link" href="/database-services">Database Services<MdOutlineArrowRightAlt className="arr" /></Link>
                <Link className="link" href="healthcare-email-lists">Healthcare Email Lists <MdOutlineArrowRightAlt className="arr" /></Link>
                <Link className="link" href="industry-wise-list">Industry Wise Lists <MdOutlineArrowRightAlt className="arr" /></Link>
                <Link className="link" href="c-level-listing">C-Level Email Lists <MdOutlineArrowRightAlt className="arr" /></Link>
              </div>
            </Link>
            <Link
              href="/blogs"
              className={activeLink == "/blogs" ? "activeLink" : "none"}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact
            </Link>
            <button className="button-primary">
              <Link href="/contact">book a consultation</Link>
            </button>
          </nav>
          <button className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
