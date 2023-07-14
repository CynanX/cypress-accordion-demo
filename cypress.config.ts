import {defineConfig} from 'cypress'
import {addMatchImageSnapshotPlugin} from '@simonsmith/cypress-image-snapshot/plugin'

export default defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    e2e: {
        setupNodeEvents(on, config) {
            addMatchImageSnapshotPlugin(on)
        },
    },
    projectId: "5k4rdx",
    screenshotOnRunFailure: true,
    scrollBehavior: false,
    video: true,
    videoCompression: false,
    retries: {
        runMode: 2,
        openMode: 0
    }
})
