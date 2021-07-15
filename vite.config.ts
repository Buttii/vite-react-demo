import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from "vite-plugin-imp";
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    plugins: [
        reactRefresh(),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: name => `antd/es${name}/style/index.css`
                }
            ]
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    // 初始化全局less变量配置
                }
            }
        }
    }
})
