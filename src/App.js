import {Route, Routes} from 'react-router-dom';

import {Amplify} from 'aws-amplify';
import {Authenticator, useTheme, Image, View, CheckboxField, useAuthenticator} from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';

import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';
import HomePage from './components/Common/home/HomePage';
import { signUp } from '@aws-amplify/auth';


Amplify.configure(awsExports)

function App() {

  const customComponents = {
    // (Optional) Keep your custom Header if you have one.
    Header() {
      const {tokens } = useTheme();
      return (
        <View className='imageHolder' height='120px'backgroundColor='#FEE3AA' textAlign='left'>
          <Image
            alt='logo'
            src='/img/logo_bobaface.svg'
          />
        </View>
      );
    },
    SignUp: {
      FormFields() {
        const { validationErrors } = useAuthenticator();
        return (
          <>
            {/* Render the default sign-up fields */}
            <Authenticator.SignUp.FormFields />
            
            {/* Append the Terms and Conditions checkbox */}
            <CheckboxField
                errorMessage={validationErrors.acknowledgement}
                hasError={!!validationErrors.acknowledgement}
                name="acknowledgement"
                value="yes"
                label={
                  <>
                    I have read and agree to the{' '}
                    <a
                      href="https://www.thebobaface.com/terms-and-conditions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://www.thebobaface.com/privacy-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </>
                }
              />
          </>
        );
      },
    },
  };

  const customServices = {
    async validateCustomSignUp(formData) {
      if (!formData.acknowledgement) {
        return { acknowledgement: 'You must agree to the Terms and Conditions' };
      }
    },
  };
  

  return (
    <Authenticator
      initialState="signUp" // Starts with the sign-up form
      components={customComponents}
      services={customServices}
    >
      {({ signOut, user }) => (
        <div>
        <header>
          <SiteNav logOut={signOut}/>
          <Routes>
            <Route path='*' element= {<HomePage />} />
            <Route path='/' exact={true} element= {<HomePage />} />
          </Routes>
          <SiteFooter/>
        </header>
      </div>
      )}
    </Authenticator>
  );
}

export default App;
