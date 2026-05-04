# FIXES.md

## 1. Flask binding issue
- **Problem:** Flask was binding to 127.0.0.1
- **Why:** Not accessible outside container
- **Fix:** Changed to 0.0.0.0
- **Risk if not fixed:** service-b cannot reach service-a

---

## 2. Incorrect service URL in worker
- **Problem:** Used localhost instead of service name
- **Why:** In Docker, localhost refers to same container
- **Fix:** Use http://service-a:5000
- **Risk:** Connection refused errors

---

## 3. Missing dependency (axios)
- **Problem:** worker.js uses axios but not installed
- **Fix:** Added to package.json
- **Risk:** Container crashes on startup

---

## 4. No environment-based configuration
- **Problem:** Hardcoded URLs
- **Fix:** Introduced SERVICE_A_URL env variable
- **Risk:** Not portable across environments

---

## 5. Docker networking misunderstanding
- **Problem:** Services not using Docker DNS
- **Fix:** Use service name as hostname
- **Risk:** Services cannot communicate

---

## 6. Missing restart policy
- **Fix:** Added restart: always
- **Why:** Ensures resiliency

---

## 7. No startup ordering
- **Fix:** Added depends_on
- **Note:** Does not guarantee readiness, only start order

---

## 8. Inefficient Docker builds
- **Fix:** Optimized layer caching (copy requirements first)
- **Benefit:** Faster rebuilds

---

# Improvements

## Improvement 1: Immediate poll on startup
- Worker now runs instantly instead of waiting 10 seconds

## Improvement 2: Error handling in worker
- Prevents crash loops
- Logs clean error messages

## Improvement 3: Slim Docker images
- Reduced size using slim/alpine base images

## Improvement 4: Clear logging
- Structured console output for debugging

---

# Result

- `docker-compose up` works
- service-b successfully polls service-a every 10 seconds
- System is stable and production-ready baseline
