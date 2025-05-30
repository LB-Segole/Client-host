import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function CallHistory() {
  const calls = [
    { name: "Alice", date: "May 28, 2025", status: "Completed" },
    { name: "Bob", date: "May 27, 2025", status: "Missed" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call History</CardTitle>
      </CardHeader>
      <CardContent>
        {calls.map((call, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback>{call.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">{call.name}</p>
              <p className="text-sm text-muted-foreground">{call.date}</p>
            </div>
            <span className={`text-sm ${call.status === "Missed" ? "text-red-500" : "text-green-500"}`}>
              {call.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
