/*
 * @Author: dingling
 * @Date: 2021-12-10 11:20:21
 * @Last Modified by:   dingling
 * @Last Modified time: 2021-12-10 11:20:21
 */
import { createContext, useContext } from "react";

interface CollapsedContext {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export const CollapsedContextes = createContext<CollapsedContext>(undefined!);

export const useCollapsedContext = (): CollapsedContext =>
  useContext(CollapsedContextes);
