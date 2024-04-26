import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsTelegram,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-col">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrwap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                YuukiEuphoria's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://yuukieuphoria.github.io/react-user-fetch/"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  User fetch app
                </Footer.Link>
                <Footer.Link href="about" rel="noopener norefferer">
                  YuukiEuphoria's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/yuukieuphoria/"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://discord.gg/yuukieuphoria"
                  rel="noopener norefferer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener norefferer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" rel="noopener norefferer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="YuukiEuphoria"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/yuukieuphoria"
              icon={BsGithub}
            />
            <Footer.Icon href="https://t.me/YuukiEuphoria" icon={BsTelegram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
