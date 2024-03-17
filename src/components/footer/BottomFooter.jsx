import React from "react";
import {
  Footer,
  FooterBrand,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

const BottomFooter = () => {
  return (
    <Footer container className="bg-slate-100">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="/"
              src="C:\Users\prami\OneDrive\Desktop\Projects\FrenchToast\PathFinder_Logo.svg"
              alt=""
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
