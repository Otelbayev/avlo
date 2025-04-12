import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, Flex, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sidebar from "../components/sidebar";
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAuth } from "../context/auth-context";
import { roles } from "../utils/mock";

const UniLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [collapsed, setCollapsed] = useState(isMobile);
  const {
    auth: { user },
  } = useAuth();

  const role = roles.find((e) => e.value === user.role)?.label || "Супер Админ";
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    const doc = document.documentElement;

    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    } else if (doc.mozRequestFullScreen) {
      doc.mozRequestFullScreen();
    } else if (doc.webkitRequestFullscreen) {
      doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen();
    }

    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Layout>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
          job={
            <>
              <div className="uppercase"> {role}</div>
              <div className="text-md py-2">
                {user.employee?.surname || ""} {user.employee?.name || ""}{" "}
                {user.employee?.patronymic || ""}
              </div>
              <div>{user.employee?.employee_type_id?.type || ""}</div>
            </>
          }
        />
        <Layout>
          <Content
            style={{
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Header
              style={{
                padding: 0,
                background: "#fff",
              }}
            >
              <Flex justify="space-between">
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
                <Flex
                  align="center"
                  gap="10px"
                  style={{
                    marginRight: "20px",
                  }}
                >
                  <Button
                    type="text"
                    onClick={openFullScreen}
                    style={{
                      marginRight: "10px",
                    }}
                    icon={
                      isFullScreen ? (
                        <FullscreenExitOutlined />
                      ) : (
                        <FullscreenOutlined />
                      )
                    }
                  />
                </Flex>
              </Flex>
            </Header>
            <div style={{ padding: "10px", overflow: "hidden" }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default UniLayout;
