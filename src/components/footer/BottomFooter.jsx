import React from "react";
import {
  Footer,
  FooterBrand,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const BottomFooter = () => {
  return (
    <Footer container className="bg-slate-100">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="/"
<<<<<<< HEAD
              src="PathFinder.svg"
              alt="Logo"
=======
              alt="Logo"
<<<<<<< HEAD
              src="C:\Users\prami\OneDrive\Desktop\Projects\FrenchToast\PathFinder_Logo.svg"
>>>>>>> 8ee6c5b979e082ab6a08904c2bdabc5cbba32af9
=======
              src="PathFinder.png"
              className="mr-3 h-3 sm:h-5"
>>>>>>> 4db614c7a5c88da85e63fdf4856dcdcc9f959266
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Connect" />
              <FooterLinkGroup col>
                <FooterLink href="" target="_blank">
                  Github
                </FooterLink>
                <FooterLink href="" target="_blank">
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink
                  href=""
                  target="_blank"
                >
                  Privacy Policy
                </FooterLink>
                <FooterLink href="" target="_blank">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
            </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="flex">
          © 2024 Frenchtoast. Devsoc, India. All Rights Reserved.
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default BottomFooter;
