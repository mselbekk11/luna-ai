import OnboardingChecklist from "@/components/onboarding-checklist";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col p-4 w-full h-full">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Luna AI</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is currently the end of the onboarding sequence. I would also
            have an in dashboard onboarding sequence, giving the user a tour of
            all of the main features of the app. You can see an example in the
            bottom right corner.
          </p>
        </CardContent>
      </Card>
      <OnboardingChecklist />
    </div>
  );
}
