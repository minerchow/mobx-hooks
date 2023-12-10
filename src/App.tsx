import React , { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routers from '@/router'
import './App.css';

function App() {
  return (
    <BrowserRouter>
                <Suspense
                    fallback={(
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                          Loading
                        </div>
                    )}
                >
                    <Switch>
                        {routers.map((item: any) => {
                            return (
                                <Route
                                    component={item.component}
                                    exact
                                    key={item.path}
                                    path={item.path} />
                            )
                        })}
                       
                    </Switch>
                </Suspense>
            </BrowserRouter>

  );
}

export default App;
