import { test as baseTest } from '@playwright/test'
import { LandingPage } from '../tests/pages/landingPage'
import { HomePage } from '../tests/pages/homePage'
import { SignInPage } from '../tests/pages/signInPage'
import { SettingsPage } from '../tests/pages/settingsPage'

type pages = {
    landingPage: LandingPage,
    homePage: HomePage,
    signInPage: SignInPage,
    settingsPage: SettingsPage
}
