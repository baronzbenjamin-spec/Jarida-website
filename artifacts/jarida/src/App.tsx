import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Facts from "@/pages/facts";
import CommonQuestions from "@/pages/common-questions";
import HowItWorks from "@/pages/how-it-works";
import PatientAnswerDetail from "@/pages/patient-answer";
import Category from "@/pages/category";
import Articles from "@/pages/articles";
import Contact from "@/pages/contact";
import { FactDetail, ArticleDetail } from "@/pages/content-detail";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/facts" component={Facts} />
      <Route path="/common-questions" component={CommonQuestions} />
      <Route path="/common-questions/:slug" component={PatientAnswerDetail} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/facts/category/:id" component={Category} />
      <Route path="/facts/:slug" component={FactDetail} />
      <Route path="/articles" component={Articles} />
      <Route path="/articles/:slug" component={ArticleDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
