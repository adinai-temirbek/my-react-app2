import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main style={{ padding: 12 }}>{children}</main>
            <Footer />
        </div>
    );
}
