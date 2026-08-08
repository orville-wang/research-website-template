export function DrivingCar({ className = "" }: { className?: string }) {
  return (
    <div className={`collaboration-drive-stage w-full overflow-hidden ${className}`}>
      <img
        src="/auto_car.svg"
        alt="Autonomous car"
        className="collaboration-car-scene h-auto w-full"
      />
    </div>
  );
}
