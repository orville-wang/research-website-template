export function DrivingCar({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img
        src="/auto_car.svg"
        alt="Autonomous car"
        className="h-auto w-full"
      />
    </div>
  );
}
