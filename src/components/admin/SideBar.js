import "react-pro-sidebar/dist/css/styles.css";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart,
    FaReact,
} from "react-icons/fa";

import sidebarBg from "../../assets/bg2.jpg";
import "./SideBar.scss";
import { Link } from "react-router-dom";
const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: "24px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: 14,
                            letterSpacing: "1px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <a
                            href="https://github.com/laivandai123/reactjs_demo"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaReact fontSize="1.5rem" color="blue" />
                            Hoi Dan IT
                        </a>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> Components </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<FaRegLaughWink />} title="Features">
                            <MenuItem>
                                {" "}
                                Quản lý User
                                <Link to="/admins/manage-users" />
                            </MenuItem>
                            <MenuItem> Quản lý bài Quiz</MenuItem>
                            <MenuItem> Quản lý câu hỏi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: "center" }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: "20px 24px",
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub fontSize="1.4rem" />
                            <span
                                style={{
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",

                                    color: "#fff",
                                }}
                            >
                                ViewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};

export default SideBar;
