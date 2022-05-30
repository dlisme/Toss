/*
 * @Author: dingling
 * @Date: 2021-11-02 00:32:07
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-22 11:46:45
 */
import React from "react";
import Loadable from "react-loadable";
import LoadSkeleton from "@/components/LoadSkeleton";

export default [
  {
    path: "/project",
    Component: Loadable({
      loader: () => import("@/views/Project"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/version",
    Component: Loadable({
      loader: () => import("@/views/Version"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/menu",
    Component: Loadable({
      loader: () => import("@/views/Menu"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/department",
    Component: Loadable({
      loader: () => import("@/views/Department"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/role",
    Component: Loadable({
      loader: () => import("@/views/Role"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/message",
    Component: Loadable({
      loader: () => import("@/views/Message"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/log",
    Component: Loadable({
      loader: () => import("@/views/Log"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/protocol",
    Component: Loadable({
      loader: () => import("@/views/Protocol"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/carousel",
    Component: Loadable({
      loader: () => import("@/views/Carousel"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/projectMsg",
    Component: Loadable({
      loader: () => import("@/views/ProjectMsg"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/orderMsg",
    Component: Loadable({
      loader: () => import("@/views/OrderMsg"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/projectLog",
    Component: Loadable({
      loader: () => import("@/views/ProjectLog"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/projectVersion",
    Component: Loadable({
      loader: () => import("@/views/ProjectVersion"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/user",
    Component: Loadable({
      loader: () => import("@/views/User"),
      loading: () => <LoadSkeleton />,
    }),
  },
  {
    path: "/address",
    Component: Loadable({
      loader: () => import("@/views/Address"),
      loading: () => <LoadSkeleton />,
    }),
  },
];
