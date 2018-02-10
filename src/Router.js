import React, { Component } from 'react';
import {
    Scene,
    Tabs,
    Router
} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import TabIcon from './components/common/TabIcon';
import AuthorList from './components/AuthorList';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import About from './components/About';

class RouterComponent extends Component {
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 500);
    }

    render() {
        return (
            <Router
                sceneStyle={{ backgroundColor: 'white' }}
            >
                <Scene key='root' hideNavBar>
                    <Tabs
                        key='tabbar'
                        swipeEnabled
                        showLabel={false}
                        activeBackgroundColor='black'
                        inactiveBackgroundColor='white'
                        tabBarPosition='bottom'
                        lazy
                    >
                        <Scene
                            initial

                            title='Stories'
                            icon={TabIcon}
                            tabImage={require('./images/book-open-variant.png')}
                            tabImageActive={require('./images/book-open-variant-active.png')}

                            key='articleList'
                            component={ArticleList}
                        />
                        <Scene
                            title='Authors'
                            icon={TabIcon}
                            tabImage={require('./images/human-greeting.png')}
                            tabImageActive={require('./images/human-greeting-active.png')}

                            key='authorList'
                            component={AuthorList}
                        />
                        <Scene
                            title='Now Reading'
                            icon={TabIcon}
                            tabImage={require('./images/read.png')}
                            tabImageActive={require('./images/read-active.png')}

                            key='article'
                            component={Article}
                        />
                        <Scene
                            hideNavBar
                            title='About'
                            titleStyle={{ color: 'white', alignSelf: 'center' }}
                            icon={TabIcon}
                            navigationBarStyle={{ backgroundColor: 'green' }}
                            tabImage={require('./images/information-outline.png')}
                            tabImageActive={require('./images/information-outline-active.png')}

                            key='about'
                            component={About}
                        />
                    </Tabs>
                </Scene>
            </Router>
        );
    }
};

export default RouterComponent;
