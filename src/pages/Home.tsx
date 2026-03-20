
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-primary/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold text-foreground">
            Hello World222
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            欢迎使用基于 React + TypeScript + Vite 的现代 Web 应用
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            这是一个由 Vesa 生成的示例应用
          </p>
          <Button className="w-full" size="lg">
            开始探索
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
