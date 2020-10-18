
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import createOrphanage from './pages/CreateOrphanage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch> {/* Switch - única rota seja exibida em tela */}
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
        <Route path="/orphanages/create" component={createOrphanage}/>
        <Route path="/orphanages/:id" component={Orphanage}/>
      </Switch>
    </BrowserRouter>
  )
}
